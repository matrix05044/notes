import React, { useState, useEffect } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

const dummyArticle = {
  id: 1,
  title: 'Wake me up when Vue ends',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam doloremque quaerat beatae, aliquid sed eligendi optio ea fugit laboriosam excepturi cumque amet laborum minus tenetur ipsa officia placeat dolor obcaecati repudiandae sit. Iure nam impedit exercitationem et, quas placeat? Molestias vel molestiae culpa optio vitae quas esse ratione, inventore excepturi deleniti natus cupiditate dolore, cumque ullam sed! Voluptate reprehenderit mollitia sit voluptates alias similique unde iste qui aut quidem officiis eos, fuga est nobis autem? Beatae quaerat vel, dignissimos modi nemo aliquid totam, obcaecati eos doloribus voluptatem ab neque fugit, distinctio quos aliquam iure sed ipsum velit perspiciatis earum.',
  articleUrl: 'https://youtube.com/helloroman',
  created: '1 day',
};

const DetailsPage = ({ match }) => {
  const [pageType, setPageType] = useState('notes');

  useEffect(() => {
    switch (match.path) {
      case routes.twitter:
        setPageType('twitters');
        break;
      case routes.article:
        setPageType('articles');
        break;
      default:
        setPageType('notes');
        break;
    }
  });

  return (
    <DetailsTemplate
      pageType={pageType}
      id={dummyArticle.id}
      title={dummyArticle.title}
      content={dummyArticle.content}
      twitterName={dummyArticle.twitterName}
      articleUrl={dummyArticle.articleUrl}
      created={dummyArticle.created}
    />
  );
};

export default DetailsPage;
