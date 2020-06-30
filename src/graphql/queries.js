/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      customerID
      accountRepresentativeID
      productID
      status
      amount
      date
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByCustomerByStatusByDate = /* GraphQL */ `
  query OrdersByCustomerByStatusByDate(
    $customerID: ID
    $statusDate: ModelOrderByCustomerByStatusByDateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCustomerByStatusByDate(
      customerID: $customerID
      statusDate: $statusDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByCustomerByDate = /* GraphQL */ `
  query OrdersByCustomerByDate(
    $customerID: ID
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCustomerByDate(
      customerID: $customerID
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByRepresentativeByDate = /* GraphQL */ `
  query OrdersByRepresentativeByDate(
    $accountRepresentativeID: ID
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByRepresentativeByDate(
      accountRepresentativeID: $accountRepresentativeID
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersByProduct = /* GraphQL */ `
  query OrdersByProduct(
    $productID: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByProduct(
      productID: $productID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      phoneNumber
      accountRepresentativeID
      createdAt
      updatedAt
      ordersByDate {
        items {
          id
          customerID
          accountRepresentativeID
          productID
          status
          amount
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      ordersByStatusDate {
        items {
          id
          customerID
          accountRepresentativeID
          productID
          status
          amount
          date
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNumber
        accountRepresentativeID
        createdAt
        updatedAt
        ordersByDate {
          nextToken
        }
        ordersByStatusDate {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const customersByRepresentative = /* GraphQL */ `
  query CustomersByRepresentative(
    $accountRepresentativeID: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customersByRepresentative(
      accountRepresentativeID: $accountRepresentativeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        phoneNumber
        accountRepresentativeID
        createdAt
        updatedAt
        ordersByDate {
          nextToken
        }
        ordersByStatusDate {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      startDate
      phoneNumber
      warehouseID
      jobTitle
      newHire
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const employeesNewHire = /* GraphQL */ `
  query EmployeesNewHire(
    $newHire: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesNewHire(
      newHire: $newHire
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const employeesNewHireByStartDate = /* GraphQL */ `
  query EmployeesNewHireByStartDate(
    $newHire: String
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesNewHireByStartDate(
      newHire: $newHire
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const employeesByName = /* GraphQL */ `
  query EmployeesByName(
    $name: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByName(
      name: $name
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const employeesByJobTitle = /* GraphQL */ `
  query EmployeesByJobTitle(
    $jobTitle: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByJobTitle(
      jobTitle: $jobTitle
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const employeesByWarehouse = /* GraphQL */ `
  query EmployeesByWarehouse(
    $warehouseID: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByWarehouse(
      warehouseID: $warehouseID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWarehouse = /* GraphQL */ `
  query GetWarehouse($id: ID!) {
    getWarehouse(id: $id) {
      id
      createdAt
      updatedAt
      employees {
        items {
          id
          name
          startDate
          phoneNumber
          warehouseID
          jobTitle
          newHire
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listWarehouses = /* GraphQL */ `
  query ListWarehouses(
    $filter: ModelWarehouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWarehouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        employees(limit: 10) {
          items {
            id
            name
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAccountRepresentative = /* GraphQL */ `
  query GetAccountRepresentative($id: ID!) {
    getAccountRepresentative(id: $id) {
      id
      orderTotal
      salesPeriod
      createdAt
      updatedAt
      orders {
        items {
          id
          customerID
          accountRepresentativeID
          productID
          status
          amount
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      customers {
        items {
          id
          name
          phoneNumber
          accountRepresentativeID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listAccountRepresentatives = /* GraphQL */ `
  query ListAccountRepresentatives(
    $filter: ModelAccountRepresentativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountRepresentatives(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderTotal
        salesPeriod
        createdAt
        updatedAt
        orders {
          nextToken
        }
        customers {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const repsByPeriodAndTotal = /* GraphQL */ `
  query RepsByPeriodAndTotal(
    $salesPeriod: String
    $orderTotal: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountRepresentativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    repsByPeriodAndTotal(
      salesPeriod: $salesPeriod
      orderTotal: $orderTotal
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderTotal
        salesPeriod
        createdAt
        updatedAt
        orders {
          nextToken
        }
        customers {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      createdAt
      updatedAt
      orders {
        items {
          id
          customerID
          accountRepresentativeID
          productID
          status
          amount
          date
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        orders {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const productsByName = /* GraphQL */ `
  query ProductsByName(
    $name: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByName(
      name: $name
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        orders {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      password
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
