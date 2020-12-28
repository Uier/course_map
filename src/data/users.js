import { courses } from './courses'

export const users = {
  '1': {
    id: '1',
    name: '蘇伶怡',
    department: '資工系',
    courses: [
      '3049', '3050', '3052',
      '3053', '3054', '3055',
      '3056', '3057', '3058',
      '3059', '2886', '2888',
      '2889', '2890', '2891',
      '2892', '2893', '2894',
      '2895', '2896'
    ]
  },
  '2': {
    id: '2',
    name: '陳詩婷',
    department: '數學系',
    courses: [ '2659', '0960', '0947', '0957' ]
  },
  '3': {
    id: '3',
    name: '劉佳穎',
    department: '地理系',
    courses: [
      '3051', '0960',
      '0958', '0957',
      '1816', '2887',
      '1211', '1168'
    ]
  },
  '4': {
    id: '4',
    name: '劉俊維',
    department: '電機系',
    courses: [ '1334', '1336', '3051', '1333', '1246', '1242' ]
  },
  '5': {
    id: '5',
    name: '周宗毅',
    department: '國文系',
    courses: [ '3051', '0947', '1655', '1727' ]
  },
  '6': {
    id: '6',
    name: '陳榮友',
    department: '資管系',
    courses: [ '2740', '2364', '2360', '2359', '2355' ]
  },
  '7': {
    id: '7',
    name: '林漢元',
    department: '財金系',
    courses: [ '1171', '2514', '2518' ]
  },
  '8': {
    id: '8',
    name: '袁永琪',
    department: '圖資系',
    courses: [ '0539', '1011', '3051', '2887' ]
  }
}

const userTags = (user) => {
  return [...new Set(user.courses.map(cid => {
    if (!courses[cid]) {
      console.log('error', cid)
      return []
    }
    return courses[cid].tags
  }).reduce((a, b) => [...a, ...b], []))]
}

const tagOccurence = (user, tag) => {
  return user.courses.filter(cid => courses[cid].tags.includes(tag)).length
}

export const userList = Object.values(users).map(user => ({
  ...user,
  avatar: user.name[0],
  tags: userTags(user).slice(0, 3),
  occurence: userTags(user).length > 0 ? tagOccurence(user, userTags(user)[0]) : 0,
}))
