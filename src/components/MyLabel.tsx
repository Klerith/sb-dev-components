// import styles from './my-styles.module.css';
import './my-styles.module.css';

interface Props {
  label: string;
  size: 'normal'|'h1'| 'h2' |'h3';
  color: 'primary'|'secondary'|'tertiary';
  allCaps: boolean;
}



export const MyLabel = ({ 
  label = 'No Label',
  size  = 'normal',
  allCaps = false,
  color
}: Props) => {



  return (
      <span 
        className={ `${ size } text-${ color }`}>
          { allCaps ? label.toLocaleUpperCase() : label }
      </span>
  )
}


export default MyLabel;
