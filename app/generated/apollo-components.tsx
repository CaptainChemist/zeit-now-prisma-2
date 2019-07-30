import gql from 'graphql-tag'
import * as ReactApollo from 'react-apollo'
import * as React from 'react'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  signupUser: User
}

export type MutationSignupUserArgs = {
  data: UserCreateInput
}

export type Query = {
  __typename?: 'Query'
  users?: Maybe<Array<User>>
  findOneUser?: Maybe<User>
  test: Scalars['String']
}

export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name: Scalars['String']
  email: Scalars['String']
}

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  email: Scalars['String']
}

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
}
export type UserFragmentFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'email'
>

export type SignupUserMutationMutationVariables = {
  name: Scalars['String']
  email: Scalars['String']
}

export type SignupUserMutationMutation = { __typename?: 'Mutation' } & {
  signupUser: { __typename?: 'User' } & UserFragmentFragment
}

export type UsersQueryQueryVariables = {}

export type UsersQueryQuery = { __typename?: 'Query' } & {
  users: Maybe<Array<{ __typename?: 'User' } & UserFragmentFragment>>
}
export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    name
    email
  }
`
export const SignupUserMutationDocument = gql`
  mutation signupUserMutation($name: String!, $email: String!) {
    signupUser(data: { name: $name, email: $email }) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`
export type SignupUserMutationMutationFn = ReactApollo.MutationFn<
  SignupUserMutationMutation,
  SignupUserMutationMutationVariables
>
export type SignupUserMutationComponentProps = Omit<
  ReactApollo.MutationProps<
    SignupUserMutationMutation,
    SignupUserMutationMutationVariables
  >,
  'mutation'
>

export const SignupUserMutationComponent = (
  props: SignupUserMutationComponentProps
) => (
  <ReactApollo.Mutation<
    SignupUserMutationMutation,
    SignupUserMutationMutationVariables
  >
    mutation={SignupUserMutationDocument}
    {...props}
  />
)

export const UsersQueryDocument = gql`
  query usersQuery {
    users {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`
export type UsersQueryComponentProps = Omit<
  ReactApollo.QueryProps<UsersQueryQuery, UsersQueryQueryVariables>,
  'query'
>

export const UsersQueryComponent = (props: UsersQueryComponentProps) => (
  <ReactApollo.Query<UsersQueryQuery, UsersQueryQueryVariables>
    query={UsersQueryDocument}
    {...props}
  />
)
