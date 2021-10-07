import styles from '../styles/Quadradinho.module.css'

export default function Quadradinho(props) {
    return(
        <div 
            style={{
                backgroundColor: props.black ? "black" : "white"
            }}
            className={styles.quadradinho}>

        </div>
    )
}