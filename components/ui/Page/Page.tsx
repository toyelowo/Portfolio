import styles from '/styles/Page.module.scss';

interface Props{
    children: React.ReactNode;
}

export function Page({children}: Props){
    return (
        <div className={styles.Page}>
            {children}
        </div>
    )
}