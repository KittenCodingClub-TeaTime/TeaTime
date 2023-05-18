import { FC } from 'react';
import styles from '../../styles/Username.module.css';
import Avatar from '../Avatar';

const Register: FC = ({}) => {
  return (
    <div className="container mx-auto border">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500"> Explore More by connecting with us.</span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <Avatar />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input className={styles.textbox} id="username" type="text" placeholder="username" />
              <button className={styles.btn} type="submit">
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member <button className="text-red-600 ml-1">Register now</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
