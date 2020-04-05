
export default function AppRouter($urlServiceProvider) {
    $urlServiceProvider.rules.otherwise({ state: 'todos' });
}
