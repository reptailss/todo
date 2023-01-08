import React, {FC, memo, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import {setOffset, setPage, setTotalPage} from '../../redux/todoSlice'
import styles from './Pagination.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {calcTotalPage} from "../../helpers/calcPage";


const Pagination: FC = memo(() => {

        const {totalPage, todoData, pageLimit, allTodoData, page} = useAppSelector(state => state.todo);

        const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch(setTotalPage(calcTotalPage(allTodoData, pageLimit)))
        }, [allTodoData]);

        useEffect(() => {
            dispatch(setOffset((page - 1) * pageLimit))
        }, [page]);


        useEffect(() => {
            if (page > totalPage) {
                dispatch(setPage(totalPage))
            }
        }, [page,totalPage]);


        const onPageChange = (event: number) => {
            dispatch(setPage(event));
            window.scrollTo(0, 0)
        };
        return (
            <div className={styles.inner}>
                <ReactPaginate
                    className={styles.root}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={(event) => onPageChange(event.selected + 1)}
                    pageRangeDisplayed={5}
                    pageCount={totalPage}
                    previousLabel="<"

                />
            </div>
        );

    }
);
export default Pagination;