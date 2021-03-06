import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea =(props)=> {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
    // state = {
    //     comments: [], // comments will go here
    //     isLoading: false,
    //     isError: false
    // }
    useEffect(async()=> {
      setIsLoading(true)
      try {
          let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.asin, {
              headers: {
                  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhmZWFhY2FhMjAwMTU1MmExNjEiLCJpYXQiOjE2MzcyNDk3NzYsImV4cCI6MTYzODQ1OTM3Nn0.0u9JU2qGXzfpqmLVtMxKIBNHqzSZiKzO8-fBwGACcMc"
              }
          })
          console.log(response)
          if (response.ok) {
              let comments = await response.json()
              setComments(comments)
              setIsLoading(false)
              setIsError(false)
              // this.setState({ comments: comments, isLoading: false, isError: false })
          } else {
              console.log('error')
              setIsLoading(false)
              setIsError(true)
              // this.setState({ isLoading: false, isError: true })
          }
      } catch (error) {
          console.log(error)
          setIsLoading(false)
          setIsError(true)
          // this.setState({ isLoading: false, isError: true })
      }
    }, [props.asin])
    // componentDidUpdate = async (prevProps) => {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.setState({
    //             isLoading: true
    //         })
    //         try {
    //             let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
    //                 headers: {
    //                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
    //                 }
    //             })
    //             console.log(response)
    //             if (response.ok) {
    //                 let comments = await response.json()
    //                 this.setState({ comments: comments, isLoading: false, isError: false })
    //             } else {
    //                 console.log('error')
    //                 this.setState({ isLoading: false, isError: true })
    //             }
    //         } catch (error) {
    //             console.log(error)
    //             this.setState({ isLoading: false, isError: true })
    //         }
    //     }
    // }

        return (
            <div>
                {isLoading && <Loading />}
                {isError && <Error />}
                <AddComment asin={props.asin} />
                <CommentList commentsToShow={comments} />
            </div>
        )
}

export default CommentArea
