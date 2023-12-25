import { UiButton } from '@/components/ui-kit/ui-button/ui-button'

export default function Home() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '200px', padding: '0 20px' }}
    >
      <UiButton variant={'primary'}>Add to card</UiButton>
    </div>
  )
}
