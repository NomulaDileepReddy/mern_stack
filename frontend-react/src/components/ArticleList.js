import React from 'react'

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
    }

    // DeleteeRow(e){
    //     this.setState({e})
    //     console.log("TableRowData:",this.parent)
    // }

    // Updatedata(){

    // }

    render(){
        return(
            <div>
                <h1>Articles Data</h1>
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col">Delete/Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.articles.map((item) => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
                                    <td><button type='button' className='btn btn-danger' onClick={(e)=>this.DeleteeRow(e)} >Delete</button>
                                        <button type='button' className='btn btn-success' onClick={()=>this.Updatedata()}>Update</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default ArticleList