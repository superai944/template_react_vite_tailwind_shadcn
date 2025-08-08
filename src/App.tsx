import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Code2, Palette, Zap } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-10 px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            React + Vite + Tailwind + shadcn/ui
          </h1>
          <p className="text-muted-foreground text-lg">
            A modern template for building beautiful UIs
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Fast Development
              </CardTitle>
              <CardDescription>
                Powered by Vite for lightning-fast HMR and builds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experience instant feedback with Hot Module Replacement and optimized production builds.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Beautiful Components
              </CardTitle>
              <CardDescription>
                Pre-styled with shadcn/ui components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Accessible, customizable components built with Radix UI and Tailwind CSS.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                TypeScript Ready
              </CardTitle>
              <CardDescription>
                Full TypeScript support out of the box
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Enjoy type safety and better developer experience with TypeScript configuration.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Component Showcase</CardTitle>
            <CardDescription>
              Explore different shadcn/ui components in action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buttons" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="buttons" className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">Large</Button>
                  <Button size="default">Default</Button>
                  <Button size="sm">Small</Button>
                  <Button size="icon">
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="cards">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Simple Card</CardTitle>
                      <CardDescription>A basic card component</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card content goes here.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Interactive Card</CardTitle>
                      <CardDescription>With actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This card has a footer with actions.</p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button size="sm">Action</Button>
                      <Button size="sm" variant="outline">Cancel</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="features">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Fully responsive design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Dark mode support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Accessibility built-in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Easy to customize</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <footer className="text-center text-sm text-muted-foreground">
          <p>Ready to build amazing UIs with shadcn/ui components</p>
        </footer>
      </div>
    </div>
  )
}

export default App