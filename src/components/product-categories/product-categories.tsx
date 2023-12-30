import {
  UiAccordionContent,
  UiAccordionItem,
  UiAccordionRoot,
  UiAccordionTrigger,
} from '@/components/ui-kit'
import { AllProductsCategories } from '@/services/api/fetch-products'
import { getCategoriesData } from '@/utils/helpers'
import { FaChevronRight } from 'react-icons/fa6'

import s from './product-categories.module.scss'

type ProductCategoriesProps = {
  categories: AllProductsCategories
}

export const ProductCategories = ({ categories }: ProductCategoriesProps) => {
  return (
    <div className={s.productCategories}>
      <h2 className={s.title}>PRODUCT CATEGORIES</h2>
      <UiAccordionRoot className={s.accordion} collapsible type={'single'}>
        {getCategoriesData(categories).map(({ content, trigger, value }) => (
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
