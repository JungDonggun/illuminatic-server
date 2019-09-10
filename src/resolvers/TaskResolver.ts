import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { projects, tasks, TaskData } from '../data'
import Task from '../schemas/Task'
