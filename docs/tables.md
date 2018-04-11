# Tables

Tables are easily made semantic when using native `<table>` tags, but these tags present styling difficulties. This component handles good semantics and accessibility for you, while making it easier to style, as well as giving a lot of flexibility around pagination and sorting of the data. It is fully semantic, responsive, and accessible.

`<Table />` supports both server-side and client-side querying for sorting, filtering, and pagination.

To use server-side querying, make sure your `query.useServer` is set to `true` and you pass in `requestData` function (see optional below) as a prop.

** A note on Table css: By default, the table will flip the headers and data vertically with an x-axis scroll when viewed on mobile and smaller screens. ** You can revert this by using a breakpoint at 650px and making all the `th` and `td` tags display as table-cells.

### Required Props:
- `headers`:
   an array of objects that look like:
```
  {
    displayValue: string (optional),
    title: string,
    sortable: boolean,
    sortValue: string
  }
```
  This populates your header row and allows for sorting of the table based on that row. `sortValue` is passed into the `changeActiveSort` function. `displayValue` is only used if you want to sort that row by one field, but present another, like if you wanted to sort by `'created'` key, but you wanted to display `'formattedDate'` key.

- `query`:
  an object that initializes pagination, sorting, and sets up whether to use client or server-side querying. It looks like:
```
  {
    useServer: boolean,
    pagination: {
      limit: number,
      offset: number
    },
    sort: {
      activeField: string, (must match one of your header's `sortValue`s)
      reverse: boolean (for ascending/descending sort of the same field)
    }
  }
```

### Optional, but helpful, Props:
- `data`:
  An array of objects representing your table data. Object keys should all match your headers' `sortValue`s. (Why is this optional? Because sometimes there is no data to show.)

- `linkFields`:
  An object that turns data cells into links. The keys must match header `sortValue`s. For example:
```
{ 'id': '/product/:id', 'name': '/organization/:name' }
```
  would make any names and ids link to '/organization/<NAME>' and '/product/<ID>' respectively.

- `loading`:
  A boolean that shows a spinner while data is loading.

- `requestData`:
  A function needed to trigger server-side querying. It will receive a an object like your `query` prop.
  * An example request might look like:
```
    requestData = (query) => api.get(`/users?limit=${query.pagination.limit}&offset=${query.pagination.offset}`)
```

### Examples:

#### Client-Side Pagination & Sorting
```
import { Table } from 'bloom-layout'

class TableContainer extends Component {
  state = {
    users: [
      {
        date: 1523446533000,
        id: 123432ji4j3k2493081904,
        status: 'deactivated',
        username: 'bloopity'
      },
      {
        date: 1523447231000,
        id: rieqpjfdq8ruew89u8r29u3jirj,
        status: 'active',
        username: 'bleep'
      },
      {
        date: 1523441234000,
        id: j8910834u3h148392104832h4,
        status: 'active',
        username: 'nuggets'
      }
    ]
  }

  render() {
    const querySetup = {
      useServer: false,
      pagination: { limit: 20, offset: 0 },
      sort: { activeField: 'date', reverse: false }
    }

    // sortValues of these headers are all fields on the users array
    const headers = [
      {
        displayValue: 'formattedDate',
        sortable: true,
        sortValue: 'date',
        title: 'Date Joined'
      },
      {
        sortValue; 'username',
        title: 'Username'
      },
      {
        sortValue: 'status',
        title: 'Activation Status'
      }
    ]

    return (
      <Table
        data={this.state.users}
        headers={headers}
        query={querySetup}
      />
    )
  }
}
```

#### Server-Side Pagination & Sorting
```
import { Table } from 'bloom-layout'

class TableContainer extends Component {
  state = {
    pagination: {
      limit: 50,
      offset: 0
    },
    sort: {
      activeField: 'date',
      reverse: false
    },
    users: []
  }

  getUsers = async ({ pagination, sort }) => {
    const res = await Api.get(`/users?limit=${pagination.limit}&offset=${pagination.offset}&sortBy=${sort.activeField}`)
    this.setState({
      pagination,
      sort,
      users: res.data
    })
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    const querySetup = {
      useServer: true,
      pagination: this.state.pagination,
      sort: this.state.sort
    }

    // sortValues of these headers are all fields on the users array passed in props
    const headers = [
      {
        displayValue: 'formattedDate',
        sortable: true,
        sortValue: 'date',
        title: 'Date Joined'
      },
      {
        sortValue; 'username',
        title: 'Username'
      },
      {
        sortValue: 'status',
        title: 'Activation Status'
      }
    ]

    return (
      <Table
        data={this.state.users}
        headers={headers}
        query={querySetup}
        requestData(this.getUsers)
      />
    )
  }
}
```

[Back to Contents](https://github.com/vineyard-bloom/bloom-starter#contents)
