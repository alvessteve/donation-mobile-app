import React, { ReactElement, ReactNode } from 'react';
import { FormattedMessage, IntlProvider as BaseIntlProvider, useIntl as useBaseIntl } from 'react-intl';
import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
import { englishTranslations, Translations, TranslationsKeys } from './Translations';

export const useIntl = () => {
  const intl = useBaseIntl();

  return {
    translation: (id: TranslationsKeys, values?: Record<string, string | ((str: string) => ReactElement)>): string => intl.formatMessage({ id }, values as Record<string, PrimitiveType | FormatXMLElementFn<string, string>>),
  };
};

export default function IntlProvider(
  { children, overriddenTranslations = {} }: { children: ReactElement, overriddenTranslations?: Partial<Translations> },
) {
  return (
    <BaseIntlProvider
      messages={{ ...englishTranslations, ...(overriddenTranslations as Partial<Translations>) }}
      locale="en"
      defaultLocale="en"
    >
      {children}
    </BaseIntlProvider>
  );
}

export function Translation({ id, values = {} }: { id: TranslationsKeys, values?: Record<string, string | FormatXMLElementFn<ReactNode, ReactNode>> }) {
  return <FormattedMessage id={id} values={values} />;
}
