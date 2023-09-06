export default function ({ route, redirect }) {
  if (route.fullPath === '/index.html') {
    return redirect(301, '/')
  }
}
