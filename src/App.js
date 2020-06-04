import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import NewsListing from './components/NewsListing'

function App() {

  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = 'a28e546b5bee45bc888221fb64f59afe';
    const checkAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${apiKey}`;

      const response = await fetch(url);
      const news = await response.json();

      setNews(news.articles);
    }

    checkAPI();
  }, [category])

  return (
    <Fragment>
      <Header
        title='Buscador de noticias'
      />
      <div className="container white">
        <Form
          setCategory={setCategory}
        />

        <NewsListing
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
