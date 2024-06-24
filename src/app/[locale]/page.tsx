import { useTranslations } from 'next-intl';

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  const randomWords = ['hello', 'world', 'foo', 'bar'];
  const random = randomWords[Math.floor(Math.random() * randomWords.length)];

  return (
    <div>
      <h1>{t('title')}</h1>
      <a href={`/welcome/${random}`}>{t('button')}</a>
    </div>
  );
}
