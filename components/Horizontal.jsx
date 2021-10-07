import Quadradinho from "./Quadradinho";
import styles from '../styles/Horizontal.module.css'

export default function Horizontal(props){
    return (
        <div className={styles.horizontal}>
            <Quadradinho black={props.black} />
            <Quadradinho black={!props.black} />
            <Quadradinho black={props.black} />
            <Quadradinho black={!props.black} />
            <Quadradinho black={props.black} />
            <Quadradinho black={!props.black} />
            <Quadradinho black={props.black} />
            <Quadradinho black={!props.black} />
        </div>
    );
    
}