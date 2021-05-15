const requireAll = requireContext => requireContext.keys().map(requireContext)
const files = require.context('./svg', false, /\.svg$/)
requireAll(files)
