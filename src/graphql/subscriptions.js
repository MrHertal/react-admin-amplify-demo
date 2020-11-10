/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse {
    onCreateWarehouse {
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
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse {
    onUpdateWarehouse {
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
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse {
    onDeleteWarehouse {
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
export const onCreateAccountRepresentative = /* GraphQL */ `
  subscription OnCreateAccountRepresentative {
    onCreateAccountRepresentative {
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
export const onUpdateAccountRepresentative = /* GraphQL */ `
  subscription OnUpdateAccountRepresentative {
    onUpdateAccountRepresentative {
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
export const onDeleteAccountRepresentative = /* GraphQL */ `
  subscription OnDeleteAccountRepresentative {
    onDeleteAccountRepresentative {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
