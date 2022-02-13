import styles from './badge.module.css'

export default function BadgeHeading() {
    return (
      <div className={styles["badge-heading"] + " txt-xl fw-7 d-flex align-items-center"}>
          <h1 className={styles["badge-heading"] + " txt-xl fw-7 d-flex align-items-center"}>Portfolio</h1> 
      </div>  
    )
}