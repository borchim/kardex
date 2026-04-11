import { PageCrudWrapper } from '@/components/PageCrudWrapper';
import { landingPageNewslettersConfig } from '@/config/crud/landing-page-newsletters';
import View from './View';

export default function NewslettersIndex() {
  return (
    <PageCrudWrapper
      config={landingPageNewslettersConfig}
      title="Newsletters"
      url={route('landing-page.newsletters.index')}
      viewComponent={View}
    />
  );
}