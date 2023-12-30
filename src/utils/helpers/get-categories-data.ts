import { filterCategoriesByGender } from './filter-categories-by-gender'

export type CategoriesArrayType = {
  content: string[]
  trigger: string
  value: string
}

export function getCategoriesData(categories: string[]): CategoriesArrayType[] {
  return [
    { content: filterCategoriesByGender('men', categories), trigger: 'Men', value: 'men' },
    { content: filterCategoriesByGender('women', categories), trigger: 'Women', value: 'women' },
    {
      content: filterCategoriesByGender('uncategorized', categories),
      trigger: 'Uncategorized',
      value: 'uncategorized',
    },
  ]
}

//[0].toUpperCase() + category.slice(1).replace(/-/g, ' ')
