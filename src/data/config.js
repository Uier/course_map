import { courses } from './courses'

export const years = [...new Set(courses.map(c => c.semester).reduce((a, b) => [...a, ...b], []))]

export const campuses = [
  '臺大總區',
  '臺大醫學院校區',
  '師大分部',
  '師大本部',
  '師大圖書館校區',
  '臺科大',
]

export const tags = [...new Set(courses.map(c => c.tags).reduce((a, b) => [...a, ...b], []))]

export const departments = [...new Set(courses.map(c => c.department))]
