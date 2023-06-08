import { FC } from 'react';
import { useAuthStore } from '../../store/store';
import { logOutUserQuery } from '../../hooks';

const Navbar: FC = ({}) => {
  const { mutate: logOutUser, isLoading } = logOutUserQuery();

  const userInformations = useAuthStore((state: any) => state.auth.userInfos);

  const navBarLinks = [
    {
      title: 'Deconnexion',
      click: () => logOutUser(),
    },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {userInformations.name}
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navBarLinks.map((linkItem, index) => (
              <li key={index}>
                <a
                  onClick={linkItem.click}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 cursor-pointer rounded md:bg-transparent md:p-0 dark:text-white hover:text-blue-500"
                >
                  {linkItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
