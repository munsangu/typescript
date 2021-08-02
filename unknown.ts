declare const maybe: unknown


const aNumber: number = maybe

if (maybe === true) {
  const aBoolean: boolean = maybe
  // const aString: string = maybe // type error
}

if (typeof maybe === 'string') {
  const aString: string = maybe
  // const aBoolean: boolean = maybe // type error
}