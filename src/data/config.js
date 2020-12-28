import { courseList } from './courses'

export const semesters = [...new Set(courseList.map(c => c.semester))].sort()

export const campuses = [...new Set(courseList.map(c => c.location))].sort()

export const tags = [...new Set(courseList.map(c => c.tags).reduce((a, b) => [...a, ...b], []))].sort()

export const departments = [...new Set(courseList.map(c => c.department))].sort()
