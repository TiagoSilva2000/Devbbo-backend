const User = require('../models/User');
const Repo = require('../models/Repo');
const Item = require('../models/Item');
const UserRepoItem = require('../models/UserRepoItem');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const htmlToText = require('html-to-text');

const getPropArray = (string) => {
  const values = string.trim().split(' ').map((text) => text.trim());
  const realValues = values.filter(str => str.length > 0);

  return realValues;
}

const buildDataObj = (dataArr) => {
  let temp = {}
  for (let i = 0; i < dataArr.length - 1; i++) {
    temp[dataArr[i+1]] = parseInt(dataArr[i]);
  }
  delete temp['0'];
  delete temp['1'];
  delete temp['Fetching'];
  delete temp['contributors'];

  return temp;
}


const buildInfoObj = (infoArr) => {
  let temp = {}
  for (let i = 0; i < infoArr.length - 1; i++) {
    temp[infoArr[i]] = parseInt(infoArr[i+1]);
  }
  delete temp['0'];
  delete temp['1'];

  return temp;
}

const buildReadme = (markdown) => {
  const temp = markdown.substr(markdown.indexOf('\n'))

  return temp;
}

const getRepoObject = async (username, reponame) => {
  let k = "";

  await fetch(`https://github.com/${username}/${reponame}`)
    .then(res => res.text())
    .then(body => k = body);

  const $ = cheerio.load(k);
  const info = getPropArray($('.pagehead-actions').text());
  const numbers = getPropArray($('.numbers-summary').text());
  const markdown = htmlToText.fromString($('#readme').html(), {
    ignoreHref: true
  }).trim();


  const dataObj = buildDataObj(numbers);
  const infoObj = buildInfoObj(info)
  const readme = buildReadme(markdown);

  return {dataObj, infoObj, readme}
}


module.exports = {
  async store(req, res) {
    const {name, itemName} = req.body;
    const {id} = req.params;

    const repo = await Repo.create({name})
    const user = await User.findByPk(id);

    console.log(user);
    if (!user) {
      return res.status(404).send({message: "This user was not found!"});
    }
    // await repo.addUser(user);
    const [userRepoItem] = await UserRepoItem.findOrCreate({
      where: {
        user_id:id,
        repo_id:repo.id
      }
    })

    if (itemName) {
      const item = await Item.findOne({
        where: {
          name: itemName
        }
      })

      if (!item) {
        return res.status(404).send({message: "This item was not found!"})
      }
      await userRepoItem.update({
        item_id:item.id
      })
    }

    return res.send(repo);
  },

  async index (req, res) {
    const {id} = req.params;
    const user = await User.findByPk(id);

    const repos = await Repo.findAll();

    return res.send(repos);
  },

  async show (req, res) {
    const {id, repoId} = req.params;
    const repo = await Repo.findByPk(repoId);
    const user = await User.findByPk(id);
    const repoObject = await getRepoObject(user.github_username, repo.name);


    return res.send(repoObject);
  },

  async update (req, res) {
    const {name} = req.body;
    const {repoId} = req.params;
    const repo = await Repo.findByPk(repoId);

    await repo.update({name});

    return res.send(repo);
  },


  async destroy (req, res) {
    const {repoId} = req.params;
    const repo = await Repo.findByPk(repoId);

    await repo.destroy();

    return res.send({message: "success!"});
  }

}