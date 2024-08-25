/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VS6zVGcSL2L
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-xl" prefetch={false}>
            <CircleIcon className="h-6 w-6" />
            <span className="sr-only">Circlez</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="#" className="text-primary" prefetch={false}>
              Dashboard
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Production
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Inventory
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Analytics
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <form className="relative flex-1 md:max-w-md">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search production data..."
              className="w-full rounded-lg bg-muted pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            />
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="Avatar"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 grid gap-6 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Production</CardTitle>
              <FactoryIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12,345</div>
              <p className="text-xs text-primary-foreground/80">+5.2% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Productivity Index</CardTitle>
              <GaugeIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">87%</div>
              <p className="text-xs text-secondary-foreground/80">+2.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-accent text-accent-foreground">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">On-Time Delivery</CardTitle>
              <TruckIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">92%</div>
              <p className="text-xs text-accent-foreground/80">+3.4% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-muted text-muted-foreground">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Equipment Utilization</CardTitle>
              <CogIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">81%</div>
              <p className="text-xs text-muted-foreground/80">+1.8% from last month</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 sm:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Production Goals</CardTitle>
              <TargetIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Daily Target</div>
                  <div className="text-2xl font-bold">1,250</div>
                </div>
                <Progress value={85} aria-label="Daily target progress" />
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Weekly Target</div>
                  <div className="text-2xl font-bold">8,750</div>
                </div>
                <Progress value={92} aria-label="Weekly target progress" />
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Monthly Target</div>
                  <div className="text-2xl font-bold">35,000</div>
                </div>
                <Progress value={78} aria-label="Monthly target progress" />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 sm:col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Production Efficiency</CardTitle>
              <BarChartIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 sm:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Production Alerts</CardTitle>
              <BellIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-red-500 p-2 text-white">
                    <XIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Equipment Breakdown</div>
                    <p className="text-xs text-muted-foreground">
                      Machine 3 in Line 2 is down. Technicians are on site.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-yellow-500 p-2 text-white">
                    <FileWarningIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Material Shortage</div>
                    <p className="text-xs text-muted-foreground">
                      Inventory of plastic resin is running low. Ordering more.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-500 p-2 text-white">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Production Target Met</div>
                    <p className="text-xs text-muted-foreground">Daily production target of 1,250 units achieved.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 sm:col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Team Collaboration</CardTitle>
              <UsersIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    className="rounded-full"
                    alt="Avatar"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <div>
                    <div className="font-medium">John Doe</div>
                    <p className="text-xs text-muted-foreground">Production Manager</p>
                  </div>
                  <Button size="icon" variant="ghost" className="ml-auto">
                    <MessageCircleIcon className="h-4 w-4" />
                    <span className="sr-only">Message John Doe</span>
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    className="rounded-full"
                    alt="Avatar"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <div>
                    <div className="font-medium">Jane Smith</div>
                    <p className="text-xs text-muted-foreground">Production Supervisor</p>
                  </div>
                  <Button size="icon" variant="ghost" className="ml-auto">
                    <MessageCircleIcon className="h-4 w-4" />
                    <span className="sr-only">Message Jane Smith</span>
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width="40"
                    height="40"
                    className="rounded-full"
                    alt="Avatar"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <div>
                    <div className="font-medium">Michael Johnson</div>
                    <p className="text-xs text-muted-foreground">Production Worker</p>
                  </div>
                  <Button size="icon" variant="ghost" className="ml-auto">
                    <MessageCircleIcon className="h-4 w-4" />
                    <span className="sr-only">Message Michael Johnson</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function FactoryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  )
}


function FileWarningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TargetIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}