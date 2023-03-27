import React from 'react'
import Button from './Button'
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseTitle, chooseAuthor, chooseGenre, chooseLength, chooseISBN, chooseID } from '../redux/slices/RootSlice'


// interface
interface BookFormProps {
  id?: string[],
}

const BookForm = (props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated book info: ${ data } ${ props.id }`);


      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Uses dispatch to update the state in our store
      dispatch(chooseTitle(data.Title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseGenre(data.genre));
      dispatch(chooseLength(data.length));
      dispatch(chooseISBN(data.ISBN));
      dispatch(chooseID(data.id));

      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 500);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='title'
          >
            Book Title
          </label>
          <Input {...register('title')} name='title' placeholder='Title'/>
        </div>

        <div>
          <label htmlFor='author'
          >
            Author
          </label>
          <Input {...register('author')} name='author' placeholder='Author'/>
        </div>

        <div>
          <label htmlFor='genre'
          >
            Genre
          </label>
          <Input {...register('genre')} name='genre' placeholder='Genre'/>
        </div>

        <div>
          <label htmlFor='length'
          >
            Length
          </label>
          <Input {...register('length')} name='length' placeholder='Length'/>
        </div>

        <div>
          <label htmlFor='ISBN'
          >
            ISBN
          </label>
          <Input {...register('ISBN')} name='ISBN' placeholder='ISBN'/>
        </div>

        <div className="flex p-1">
          <Button
            className='place-items-center justify-center m-3 p-3 mb-5 rounded-md 
             bg-sky-300 bg-opacity-40 text-sky-600 
             hover:bg-sky-300 hover:border
             hover:border-sky-600 hover:text-white transition ease-linear duration-200'
            >
              Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm