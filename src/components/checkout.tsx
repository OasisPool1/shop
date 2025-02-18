"use client";
import { useSearchParams } from "next/navigation";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Checkout() {
  const params = useSearchParams();
  let name = params.get("name");
  let price = formatCurrency(params.get("price"));
  return (
    <>
      <h2 className="mb-4 text-lg font-semibold">Billing Address</h2>
      <div className="mb-6 flex gap-4">
        <img
          src="/public/images/shoe-001.png"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-muted-foreground">Black</p>
          <p className="text-sm">x1</p>
        </div>
        <div className="ml-auto">
          <span className="font-medium">{price}</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">{price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Discount</span>
            <span className="font-medium">-{formatCurrency(0)}</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="font-medium">Grand total</span>
            <span className="font-medium">{price}</span>
          </div>
        </div>

        <Button className="w-full bg-slate-900 hover:bg-slate-800">
          Continue to payment
        </Button>
      </div>
    </>
  );
}
