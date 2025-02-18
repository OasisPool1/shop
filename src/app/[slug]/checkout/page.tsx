import Header from "@/components/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkout } from "@/components/checkout";

export async function generateStaticParams() {
  const districts = require("../../../../public/districts.json");

  return districts.map((name: string) => ({
    slug: name.replace(/\s/g, "-"),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <>
      <Header title={`Sepatune ${slug.split("-").join(" ")}`} />

      <div className="grid gap-8 bg-white p-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="space-y-8">
            {/* Country Selection */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">
                1. Select shipping country
              </h2>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">
                2. Shipping address
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" placeholder="Enter your phone" />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter your city" />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP code</Label>
                  <Input id="zipCode" placeholder="Enter your ZIP code" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter your address" />
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">3. Shipping method</h2>
              <RadioGroup defaultValue="free" className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="free" id="free" />
                    <div>
                      <Label htmlFor="free">Free shipping</Label>
                      <p className="text-sm text-muted-foreground">
                        8-30 business days
                      </p>
                    </div>
                  </div>
                  <span className="font-medium">$0</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="regular" id="regular" />
                    <div>
                      <Label htmlFor="regular">Regular shipping</Label>
                      <p className="text-sm text-muted-foreground">
                        3-10 business days
                      </p>
                    </div>
                  </div>
                  <span className="font-medium">$25</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="express" id="express" />
                    <div>
                      <Label htmlFor="express">Express shipping</Label>
                      <p className="text-sm text-muted-foreground">
                        1-3 business days
                      </p>
                    </div>
                  </div>
                  <span className="font-medium">$100</span>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="rounded-lg bg-slate-50 p-6">
            <Checkout />
          </div>
        </div>
      </div>
    </>
  );
}
