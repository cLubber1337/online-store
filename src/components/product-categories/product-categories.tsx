import {
  UiAccordionContent,
  UiAccordionItem,
  UiAccordionRoot,
  UiAccordionTrigger,
} from '@/components/ui-kit'
import { AllProductsCategories } from '@/services/api/fetch-products'
import { FaChevronRight } from 'react-icons/fa6'

import s from './product-categories.module.scss'

type ProductCategoriesProps = {
  categories: AllProductsCategories
}

export type CategoriesArrayType = {
  content: string[]
  trigger: string
  value: string
}

export const ProductCategories = ({ categories }: ProductCategoriesProps) => {
  const categoriesArray: CategoriesArrayType[] = [
    { content: ['shoes, t-shirts', 'watch', 'hats'], trigger: 'Men', value: 'men' },
    { content: ['shoes-Woman', 'Woman-1', 'Woman'], trigger: 'Woman', value: 'woman' },
    {
      content: ['Uncategorized-1', 'Uncategorized-3', 'Uncategorized-4'],
      trigger: 'Uncategorized',
      value: 'Uncategorized',
    },
  ]

  return (
    <div className={s.productCategories}>
      <h2 className={s.title}>PRODUCT CATEGORIES</h2>
      <UiAccordionRoot className={s.accordion} type={'multiple'}>
        {categoriesArray.map(({ content, trigger, value }) => (
          <UiAccordionItem className={s.accordionItem} key={value} value={value}>
            <UiAccordionTrigger className={s.accordionTrigger}>
              <FaChevronRight className={s.accordionTriggerIcon} />
              {trigger}
            </UiAccordionTrigger>
            <UiAccordionContent className={s.accordionContent}>
              {content.map(category => (
                <p className={s.category} key={category} tabIndex={0}>
                  {category}
                </p>
              ))}
            </UiAccordionContent>
          </UiAccordionItem>
        ))}
      </UiAccordionRoot>
    </div>
  )
}
