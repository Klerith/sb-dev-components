// import styles from './my-styles.module.css';
import './my-styles.module.css';

interface Props {
  label: string;
  size: 'normal'|'h1'| 'h2' |'h3';
  color: 'primary'|'secondary'|'tertiary';
  allCaps: boolean;
}



export const MyHeader = ({ 
  label = 'No Label',
  size  = 'normal',
  allCaps = false,
  color
}: Props) => {



  return (
      <h1 
        className={ `${ size } text-${ color }`}>
          { allCaps ? label.toLocaleUpperCase() : label }
      </h1>
  )
}


export default MyHeader;
