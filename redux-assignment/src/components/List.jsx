import React, { useRef, useEffect, useState } from 'react'
import ListItems from './ListItems';
import { fetchData } from '../app/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setLoading } from '../app/actions'
const List = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const loading = useSelector(state => state.loading);
  const page = useSelector(state => state.page);
  const [lastElement, setLastElement] = useState(null);


  const observer = useRef(
    new IntersectionObserver(
      (items) => {
        const first = items[0];
        if (first.isIntersecting) {
          dispatch(setPage(page + 1));
        }
      })
  );

  useEffect(() => {
    dispatch(setLoading(true))
    if (page <= 2)
      setTimeout(() => {
        dispatch(fetchData(page));
      }, 1000);

    console.log("in eff :" + page);
  }, [page])

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (

    <div id="container" className='container'>
      <h1>Redux Assignment</h1>
      {items.length > 0 && items.map((listItem, i) => {
        return i === items.length - 1 && !loading && page <= 2 ? (
          <div key={listItem.id} ref={setLastElement} className="container">
            <ListItems key={listItem.id} item={listItem} />
          </div>
        )
          : <ListItems key={listItem.id} item={listItem} />
      })
      }
      {loading && <h1> Loading ... </h1>}
    </div>
  )
}

export default List