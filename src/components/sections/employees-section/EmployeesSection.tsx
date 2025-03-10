import brand1 from '../../../assets/images/employees/brand1.svg'
import brand2 from '../../../assets/images/employees/brand2.svg'
import brand3 from '../../../assets/images/employees/brand3.svg'
import brand4 from '../../../assets/images/employees/brand4.svg'
import brand5 from '../../../assets/images/employees/brand5.svg'

import styles from './EmployeesSection.module.scss'


const EmployeesSection = () => {
  const employees = [brand1, brand2, brand3, brand4, brand5]
  
    return (
    <section className={styles.EmployeesSection}>
      <div className={styles.container}>
        {employees.map((brand: string) => {
            return (
                <img src={brand} alt={brand} />
            )
        })}
      </div>
    </section>
  );
};

export default EmployeesSection;
