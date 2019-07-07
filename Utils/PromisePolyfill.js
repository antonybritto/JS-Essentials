const states = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected',
};

class Promise {
    constructor(executor) {
        const tryCall = callback => 
        .try(() => callback(this.value));
        const laterCalls = [];
        const callLater = getMember => callback => new Promise(resolve => laterCalls.push(() => resolve(getMember()(callback))));
        const members = {
            [states.resolved]: {
                state: states.resolved,
                then: tryCall,
                catch: _ => this
            },
            [states.rejected]: {
                state: states.rejected,
                then: _ => this,
                catch: tryCall
            },
            [states.pending]: {
                state: states.pending,
                then: callLater(() => this.then),
                catch: callLater(() => this.catch)
            }
        };
        const changeState = state => Object.assign(this, members[state]);
        const apply = (value, state) => {
            if (this.state === states.pending) {
                this.value = value;
                changeState(state);
                for (const laterCall of laterCalls) {
                    laterCall();
                }
            }
        };

        const getCallback = state => value => {
            if (value instanceof Promise && state === states.resolved) {
                value.then(value => apply(value, states.resolved));
                value.catch(value => apply(value, states.rejected));
            } else {
                apply(value, state);
            }
        };

        const resolve = getCallback(states.resolved);
        const reject = getCallback(states.rejected);
        changeState(states.pending);
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    static Resolve(value) {
        return new Promise(resolve => resolve(value));
    }

    static Reject(value) {
        return new Promise((_, reject) => reject(value));
    }

    static try(callback) {
        return new Promise(resolve => resolve(callback()));
    }
    
    static All() {
    }
    
    static Any() {
    }
    
    static Race() {
    }
    
    static AllSettled() {
    }
}
