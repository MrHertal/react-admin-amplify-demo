/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      accountRepresentativeID
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
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      accountRepresentativeID
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      accountRepresentativeID
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
      createdAt
      updatedAt
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createWarehouse = /* GraphQL */ `
  mutation CreateWarehouse(
    $input: CreateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    createWarehouse(input: $input, condition: $condition) {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const updateWarehouse = /* GraphQL */ `
  mutation UpdateWarehouse(
    $input: UpdateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    updateWarehouse(input: $input, condition: $condition) {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteWarehouse = /* GraphQL */ `
  mutation DeleteWarehouse(
    $input: DeleteWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    deleteWarehouse(input: $input, condition: $condition) {
      id
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
      createdAt
      updatedAt
    }
  }
`;
export const createAccountRepresentative = /* GraphQL */ `
  mutation CreateAccountRepresentative(
    $input: CreateAccountRepresentativeInput!
    $condition: ModelAccountRepresentativeConditionInput
  ) {
    createAccountRepresentative(input: $input, condition: $condition) {
      id
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
      orderTotal
      salesPeriod
      createdAt
      updatedAt
    }
  }
`;
export const updateAccountRepresentative = /* GraphQL */ `
  mutation UpdateAccountRepresentative(
    $input: UpdateAccountRepresentativeInput!
    $condition: ModelAccountRepresentativeConditionInput
  ) {
    updateAccountRepresentative(input: $input, condition: $condition) {
      id
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
      orderTotal
      salesPeriod
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccountRepresentative = /* GraphQL */ `
  mutation DeleteAccountRepresentative(
    $input: DeleteAccountRepresentativeInput!
    $condition: ModelAccountRepresentativeConditionInput
  ) {
    deleteAccountRepresentative(input: $input, condition: $condition) {
      id
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
      orderTotal
      salesPeriod
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
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
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
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
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      password
      picture {
        bucket
        region
        key
      }
      documents {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      password
      picture {
        bucket
        region
        key
      }
      documents {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      password
      picture {
        bucket
        region
        key
      }
      documents {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
