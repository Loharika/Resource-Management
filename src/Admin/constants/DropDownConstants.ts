export const SortOptions = [
   {
      key: 'Recently Added',
      text: 'Recently Added',
      value: 'RECENTLY ADDED'
   },
   {
      key: 'Ascending',
      text: 'Ascending',
      value: 'ASCENDING'
   },
   {
      key: 'Descending',
      text: 'Descending',
      value: 'DESCENDING'
   }
]
export const FilterOptions = [
   {
      key: 'Due Date Time',
      text: 'Due Date Time',
      value: 'DUE DATE TIME'
   },
   {
      key: 'Access Level',
      text: 'Access Level',
      value: 'ACCESS LEVEL'
   },
   {
      key: 'Resource',
      text: 'Resource',
      value: 'RESOURCE'
   }
]
export const RequestsAccessLevelOptions = [
   {
      key: 'READ',
      text: 'Read',
      value: 'READ'
   },
   {
      key: 'WRITE',
      text: 'Write',
      value: 'WRITE'
   },
   {
      key: 'ADMIN',
      text: 'Admin',
      value: 'ADMIN'
   }
]
export const UserListSortOptions = [
   {
      key: 'DEPARTMENT',
      text: 'Department',
      value: 'DEPARTMENT'
   },
   {
      key: 'JOB_ROLE',
      text: 'Job Role',
      value: 'JOB_ROLE'
   }
]
export const UserListFilterOptions = [
   {
      key: 'DEPARTMENT',
      text: 'Department',
      value: 'DEPARTMENT'
   },
   {
      key: 'JOB_ROLE',
      text: 'Job Role',
      value: 'JOB_ROLE'
   }
]
export const AccessLevelData = {
   listTitle: 'Read',
   listItems: RequestsAccessLevelOptions,
   placeholder: 'Access Level'
}
export const SortData = {
   listTitle: 'Sort',
   listItems: UserListSortOptions,
   placeholder: 'SORT'
}
export const FilterData = {
   listTitle: 'Filter',
   listItems: UserListFilterOptions,
   placeholder: 'FILTER'
}
