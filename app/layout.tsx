
import Navbar from '@/app/components/navbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import "./globals.scss";
import darkTheme from './theme';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

interface Props {
  [elemName: string]: any;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Navbar />
          <div className="header-background">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: '#ff883a', stopOpacity: '1' }}
                  />
                </linearGradient>
              </defs>
              <path
                fill="url(#gradient)"
                d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
          
          {children}
        </AppRouterCacheProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
