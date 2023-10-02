import { FC, ReactNode } from 'react';
import { config, GluestackUIProvider } from '@gluestack-ui/themed';

type Props = {
  children: ReactNode;
}

export const GluestackProvider: FC<Props> = ({ children }) => {
  return (
    <GluestackUIProvider config={config.theme}>
      {children}
    </GluestackUIProvider>
  );
};
