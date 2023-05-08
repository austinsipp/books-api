const React = require('react')
const Default = require('./default')


function Show ({book}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
        <div className="col-sm-6">
                <h2><a href={`/places/${book.id}`} >
                    {book.title}
                    </a>
                </h2>
                <p className='text-center'>
                    {book.description}
                </p>
                <img src={book.imageURL} alt={book.title}></img>
                
                <p className='text-center'>
                    Published in {book.year}
                </p>
                <p className='text-center'>
                    Quantity available: {book.quantity}
                </p>
            </div>

        </Default>

      )
  }
  

module.exports = Show