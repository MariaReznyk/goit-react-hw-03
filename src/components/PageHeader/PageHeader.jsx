import style from './PageHeader.module.css';

function PageHeader({ children }) {
  return <h1 className={style.pageHeader}>{children}</h1>;
}

export default PageHeader;
