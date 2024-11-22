import EmailRepository from "./EmailRepository";
import CheckoutRepository from "./CheckoutRepository";
const repositories = {
    mail: EmailRepository,
    checkout: CheckoutRepository
};
export const RepositoryFactory = {
    get: (name) => repositories[name],
};
