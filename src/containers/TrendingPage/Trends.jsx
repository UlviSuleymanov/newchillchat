import React, { useEffect, useState } from 'react';
import getTrends from '../../API/getTrends';
import { useFetching } from '../../hooks/useFetching';
import { getPagesArray, getPagesCount } from '../../utils/pages';
import styles from './trends.module.css';
import loader from '../../assets/images/Spinner.svg';
import MyModal from '../../assets/common/MyModal/MyModal';
import TrendFilter from './TrendsList/TrendFilter';
import TrendForm from './TrendsList/TrendForm';
import TrendsList from './TrendsList/TrendsList';
import { usePosts } from '../../hooks/usePosts';
import MyButton from '../../assets/common/MyButton/MyButton';

const Trends = () => {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sorted: '', query: '' });
  const [modal, setModal] = React.useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sorted, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchTasks, isLoading, postError] = useFetching(async (limit, page) => {
    const response = await getTrends.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  let pagesArray = getPagesArray(totalPages);
  console.log([pagesArray]);

  useEffect(() => {
    fetchTasks(limit, page);
  }, []);

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchTasks(limit, page);
  };

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal}>
        <TrendForm create={createNewPost} />
      </MyModal>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create a new post
      </MyButton>
      <TrendFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Something went wrong ${postError}</h1>}
      <hr style={{ margin: '15px 0' }}></hr>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <img src={loader} alt={loader} />
        </div>
      ) : (
        <TrendsList remove={removePost} posts={sortedAndSearchedPosts} />
      )}

      <div className="page_wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page_current' : 'page'}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Trends;
