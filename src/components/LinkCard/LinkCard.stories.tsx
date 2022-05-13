import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkCard from './LinkCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LinkCard',
  component: LinkCard,
} as ComponentMeta<typeof LinkCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkCard> = (args) => (
  <LinkCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  imageUrl:
    'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9RHluYW1vREIlRTMlODElQUUlRTQlQjglQTYlRTUlODglOTclRTMlODIlQjklRTMlODIlQUQlRTMlODMlQTMlRTMlODMlQjMlRTMlODIlOTJib3RvMyVFMyU4MSVBNyVFOCVBOSVBNiVFMyU4MSU5NyVFMyU4MSVBNiVFMyU4MSVCRiVFMyU4MSU5RiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9ZDg1NWVkNjcwM2M0ZDNlN2ZlNmRiMzczOTEyOTVkODU&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwZGFpa2kta29uJnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9MzYmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz1jZTBlMWU1OWFjNjZjOTg1NTZkYjM5Yzg1ZWQyYWYwMw&blend-x=142&blend-y=491&blend-mode=normal&s=00d82702028eb77de88af3666f1885a8',
  title: 'DynamoDBの並列スキャンをboto3で試してみた - Qiita',
  description:
    '\nはじめに\nDynamoDBでデータを取得する際scanを使用するとテーブルの全てのレコードに対して逐次処理をしていきます。\nそのため基本的にはscanではなく、queryを使うというのがベストプラクティスです。\nしかし、どうしてもス...',
  url: 'https://qiita.com/daiki-kon/items/72d4da4084d975029f7f',
  updateAt: '2022/03/04',
};
