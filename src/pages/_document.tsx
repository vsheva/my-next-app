// import { Html, Head, Main, NextScript } from 'next/document';
// import createEmotionServer from '@emotion/server/create-instance';
// import createEmotionCache from '@/theme/createEmotionCache';
// import {NextPage} from "next"

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from 'next/document';
// import createEmotionServer from '@emotion/server/types/create-instance';
import createEmotionCache from '@/theme/createEmotionCache';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

// interface MyDocumentProps {
//   emotionStyleTags: any;
// }
interface MyDocumentProps extends DocumentInitialProps {
  emotionStyleTags: any;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props: any) {
            return <App emotionCache={cache} {...props} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map(style => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{this.props.emotionStyleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
