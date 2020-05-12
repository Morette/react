import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
   full_name: string;
   description: string;
   owner: {
      login: string;
      avatar_url: string;
   };
}

const Dashboard: React.FC = () => {
   const [newRepo, setNewRepo] = useState('');
   const [inputError, setInputError] = useState('');
   const [repositories, setRepositories] = useState<Repository[]>(() => {
      const storagedRepositories = localStorage.getItem('@GithubExplorer');

      return storagedRepositories ? JSON.parse(storagedRepositories) : [];
   });

   useEffect(() => {
      localStorage.setItem('@GithubExplorer', JSON.stringify(repositories));
   }, [repositories]);

   const handleAddRepository = async (
      event: FormEvent<HTMLFormElement>,
   ): Promise<void> => {
      event.preventDefault();

      if (!newRepo) {
         setInputError('type author/repository');
         return;
      }

      try {
         const response = await api.get<Repository>(`repos/${newRepo}`);

         setRepositories([...repositories, response.data]);
         setNewRepo('');
         setInputError('');
      } catch (err) {
         setInputError('search repository failed');
      }
   };

   return (
      <>
         <img src={logo} alt="Github Explorer" />
         <Title>github repositories</Title>

         <Form hasError={!!inputError} onSubmit={handleAddRepository}>
            <input
               value={newRepo}
               onChange={(e) => setNewRepo(e.target.value)}
               placeholder="Type repository name"
               type="text"
            />
            <button type="submit">Search</button>
         </Form>

         {inputError && <Error>{inputError}</Error>}

         <Repositories>
            {repositories.map((repository) => (
               <Link
                  to={`/repository/${repository.full_name}`}
                  key={repository.full_name}
                  href="anything"
               >
                  <img
                     src={repository.owner.avatar_url}
                     alt={repository.owner.login}
                  />
                  <div>
                     <strong>{repository.full_name}</strong>
                     <p>{repository.description}</p>
                  </div>

                  <FiChevronRight size={20} />
               </Link>
            ))}
         </Repositories>
      </>
   );
};

export default Dashboard;
