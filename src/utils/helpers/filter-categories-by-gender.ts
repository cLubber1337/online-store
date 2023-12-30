type RootCategory = 'men' | 'uncategorized' | 'women'

export function filterCategoriesByGender(
  rootCategory: RootCategory,
  AllCategories: string[]
): string[] {
  switch (rootCategory) {
    case 'men':
      return AllCategories.filter(
        category => category.slice(0, rootCategory.length) === rootCategory
      ).map(category => category[0].toUpperCase() + category.slice(1).replace(/-/g, ' '))
    case 'women':
      return AllCategories.filter(
        category => category.slice(0, rootCategory.length) === rootCategory
      ).map(category => category[0].toUpperCase() + category.slice(1).replace(/-/g, ' '))
    case 'uncategorized':
      return AllCategories.filter(
        category =>
          category.slice(0, 'men'.length) !== 'men' && category.slice(0, 'women'.length) !== 'women'
      ).map(category => category[0].toUpperCase() + category.slice(1).replace(/-/g, ' '))
    default:
      return []
  }
}
